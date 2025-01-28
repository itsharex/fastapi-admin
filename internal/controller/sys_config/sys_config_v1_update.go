package sys_config

import (
	"context"
	"github.com/iimeta/fastapi-admin/internal/service"

	"github.com/iimeta/fastapi-admin/api/sys_config/v1"
)

func (c *ControllerV1) Update(ctx context.Context, req *v1.UpdateReq) (res *v1.UpdateRes, err error) {

	if !service.Auth().Authenticator(ctx, req) {
		return
	}

	_, err = service.SysConfig().Update(ctx, req.SysConfigUpdateReq)

	return
}
