package finance

import (
	"context"
	"fmt"
	"github.com/gogf/gf/v2/os/gtime"
	"github.com/gogf/gf/v2/util/gconv"
	"github.com/iimeta/fastapi-admin/internal/dao"
	"github.com/iimeta/fastapi-admin/internal/model"
	"github.com/iimeta/fastapi-admin/internal/service"
	"github.com/iimeta/fastapi-admin/utility/db"
	"github.com/iimeta/fastapi-admin/utility/logger"
	"github.com/iimeta/fastapi-admin/utility/util"
	"go.mongodb.org/mongo-driver/bson"
	"time"
)

type sFinance struct{}

func init() {
	service.RegisterFinance(New())
}

func New() service.IFinance {
	return &sFinance{}
}

// 明细分页列表
func (s *sFinance) BillPage(ctx context.Context, params model.FinanceBillPageReq) (*model.FinanceBillPageRes, error) {

	paging := &db.Paging{
		Page:     params.Page,
		PageSize: params.PageSize,
	}

	filter := bson.M{}

	if service.Session().IsUserRole(ctx) {
		filter["user_id"] = service.Session().GetUserId(ctx)
	} else if params.UserId != 0 {
		filter["user_id"] = params.UserId
	}

	if len(params.StatDate) > 0 {
		filter["stat_date"] = bson.M{
			"$gte": params.StatDate[0],
			"$lte": params.StatDate[1],
		}
	}

	results, err := dao.StatisticsUser.FindByPage(ctx, paging, filter, "", "-stat_date", "-tokens")
	if err != nil {
		logger.Error(ctx, err)
		return nil, err
	}

	items := make([]*model.Bill, 0)
	for _, result := range results {
		items = append(items, &model.Bill{
			Id:       result.Id,
			UserId:   result.UserId,
			Total:    result.Total,
			Tokens:   result.Tokens,
			Models:   len(result.ModelStats),
			StatDate: result.StatDate,
		})
	}

	return &model.FinanceBillPageRes{
		Items: items,
		Paging: &model.Paging{
			Page:     paging.Page,
			PageSize: paging.PageSize,
			Total:    paging.Total,
		},
	}, nil
}

// 交易记录分页列表
func (s *sFinance) DealRecordPage(ctx context.Context, params model.FinanceDealRecordPageReq) (*model.FinanceDealRecordPageRes, error) {

	paging := &db.Paging{
		Page:     params.Page,
		PageSize: params.PageSize,
	}

	filter := bson.M{}

	if service.Session().IsUserRole(ctx) {
		filter["user_id"] = service.Session().GetUserId(ctx)
	} else if params.UserId != 0 {
		filter["user_id"] = params.UserId
	}

	if params.Remark != "" {
		filter["remark"] = bson.M{
			"$regex": params.Remark,
		}
	}

	if params.Status != 0 {
		filter["status"] = params.Status
	}

	if len(params.CreatedAt) > 0 {
		gte := gtime.NewFromStrFormat(params.CreatedAt[0], time.DateOnly).TimestampMilli()
		lte := gtime.NewFromStrLayout(params.CreatedAt[1], time.DateOnly).EndOfDay(true).TimestampMilli()
		filter["created_at"] = bson.M{
			"$gte": gte,
			"$lte": lte,
		}
	}

	results, err := dao.DealRecord.FindByPage(ctx, paging, filter, "", "-updated_at")
	if err != nil {
		logger.Error(ctx, err)
		return nil, err
	}

	items := make([]*model.DealRecord, 0)
	for _, result := range results {
		items = append(items, &model.DealRecord{
			Id:        result.Id,
			UserId:    result.UserId,
			Quota:     result.Quota,
			Remark:    result.Remark,
			Status:    result.Status,
			CreatedAt: util.FormatDateTime(result.CreatedAt),
			UpdatedAt: util.FormatDateTime(result.UpdatedAt),
		})
	}

	return &model.FinanceDealRecordPageRes{
		Items: items,
		Paging: &model.Paging{
			Page:     paging.Page,
			PageSize: paging.PageSize,
			Total:    paging.Total,
		},
	}, nil
}

// 账单明细导出
func (s *sFinance) BillExport(ctx context.Context, params model.FinanceBillExportReq) (string, error) {

	filter := bson.M{}
	if len(params.Ids) > 0 {
		filter = bson.M{"_id": bson.M{"$in": params.Ids}}
	} else {
		filter = bson.M{
			"stat_date": bson.M{
				"$gte": params.StatDate[0],
				"$lte": params.StatDate[1],
			},
		}
	}

	results, err := dao.StatisticsUser.Find(ctx, filter, "-stat_date", "-tokens")
	if err != nil {
		logger.Error(ctx, err)
		return "", err
	}

	var titleCols []string
	titleCols = append(titleCols, "账单日期", "用户ID", "模型", "调用数", "花费($)")

	colFieldMap := make(map[string]string)
	colFieldMap["账单日期"] = "StatDate"
	colFieldMap["用户ID"] = "UserId"
	colFieldMap["模型"] = "Model"
	colFieldMap["调用数"] = "Total"
	colFieldMap["花费($)"] = "Tokens"

	filePath := fmt.Sprintf("./resource/export/bill_%d.xlsx", gtime.TimestampMilli())

	values := make([]interface{}, 0)
	for _, result := range results {
		for _, modelStat := range result.ModelStats {
			values = append(values, &model.BillExport{
				StatDate: result.StatDate,
				UserId:   result.UserId,
				Model:    modelStat.Model,
				Total:    modelStat.Total,
				Tokens:   gconv.String(util.QuotaConv(result.Tokens)),
			})
		}
	}

	if err = util.ExcelExport("账单明细", titleCols, colFieldMap, values, filePath); err != nil {
		return "", err
	}

	return filePath, nil
}
