package do

import (
	"github.com/gogf/gf/v2/util/gmeta"
	"github.com/iimeta/fastapi-admin/internal/model/common"
)

const (
	MIDJOURNEY_COLLECTION = "midjourney"
)

type Midjourney struct {
	gmeta.Meta           `collection:"midjourney" bson:"-"`
	Id                   string                   `bson:"_id,omitempty"`                     // ID
	TraceId              string                   `bson:"trace_id,omitempty"`                // 日志ID
	UserId               int                      `bson:"user_id,omitempty"`                 // 用户ID
	AppId                int                      `bson:"app_id,omitempty"`                  // 应用ID
	Corp                 string                   `bson:"corp,omitempty"`                    // 公司
	ModelId              string                   `bson:"model_id,omitempty"`                // 模型ID
	Name                 string                   `bson:"name,omitempty"`                    // 模型名称
	Model                string                   `bson:"model,omitempty"`                   // 模型
	Type                 int                      `bson:"type,omitempty"`                    // 模型类型[1:文生文, 2:文生图, 3:图生文, 4:图生图, 5:文生语音, 6:语音生文, 100:多模态]
	Key                  string                   `bson:"key,omitempty"`                     // 密钥
	IsEnablePresetConfig bool                     `bson:"is_enable_preset_config,omitempty"` // 是否启用预设配置
	PresetConfig         common.PresetConfig      `bson:"preset_config,omitempty"`           // 预设配置
	IsEnableModelAgent   bool                     `bson:"is_enable_model_agent,omitempty"`   // 是否启用模型代理
	ModelAgentId         string                   `bson:"model_agent_id,omitempty"`          // 模型代理ID
	ModelAgent           *ModelAgent              `bson:"model_agent,omitempty"`             // 模型代理信息
	IsEnableForward      bool                     `bson:"is_enable_forward,omitempty"`       // 是否启用模型转发
	ForwardConfig        *common.ForwardConfig    `bson:"forward_config,omitempty"`          // 模型转发配置
	IsSmartMatch         bool                     `bson:"is_smart_match,omitempty"`          // 是否智能匹配
	IsEnableFallback     bool                     `bson:"is_enable_fallback,omitempty"`      // 是否启用后备模型
	FallbackConfig       *common.FallbackConfig   `bson:"fallback_config,omitempty"`         // 后备模型配置
	RealModelId          string                   `bson:"real_model_id,omitempty"`           // 真实模型ID
	RealModelName        string                   `bson:"real_model_name,omitempty"`         // 真实模型名称
	RealModel            string                   `bson:"real_model,omitempty"`              // 真实模型
	ReqUrl               string                   `bson:"req_url,omitempty"`                 // 请求地址
	TaskId               string                   `bson:"task_id,omitempty"`                 // 任务ID
	Action               string                   `bson:"action,omitempty"`                  // 动作[IMAGINE, UPSCALE, VARIATION, ZOOM, PAN, DESCRIBE, BLEND, SHORTEN, SWAP_FACE]
	Prompt               string                   `bson:"prompt,omitempty"`                  // 提示(提问)
	PromptEn             string                   `bson:"prompt_en,omitempty"`               // 英文提示(提问)
	ImageUrl             string                   `bson:"image_url,omitempty"`               // 图像地址
	Progress             string                   `bson:"progress,omitempty"`                // 进度
	Response             interface{}              `bson:"response,omitempty"`                // 响应结果
	MidjourneyQuotas     []common.MidjourneyQuota `bson:"midjourney_quotas,omitempty"`       // Midjourney额度
	TotalTokens          int                      `bson:"total_tokens,omitempty"`            // 总令牌数
	ConnTime             int64                    `bson:"conn_time,omitempty"`               // 连接时间
	Duration             int64                    `bson:"duration,omitempty"`                // 持续时间
	TotalTime            int64                    `bson:"total_time,omitempty"`              // 总时间
	InternalTime         int64                    `bson:"internal_time,omitempty"`           // 内耗时间
	ReqTime              int64                    `bson:"req_time,omitempty"`                // 请求时间
	ReqDate              string                   `bson:"req_date,omitempty"`                // 请求日期
	ClientIp             string                   `bson:"client_ip,omitempty"`               // 客户端IP
	RemoteIp             string                   `bson:"remote_ip,omitempty"`               // 远程IP
	LocalIp              string                   `bson:"local_ip,omitempty"`                // 本地IP
	ErrMsg               string                   `bson:"err_msg,omitempty"`                 // 错误信息
	IsRetry              bool                     `bson:"is_retry,omitempty"`                // 是否重试
	Retry                *common.Retry            `bson:"retry,omitempty"`                   // 重试
	Status               int                      `bson:"status,omitempty"`                  // 状态[1:成功, -1:失败, 2:中止, 3:重试]
	Host                 string                   `bson:"host,omitempty"`                    // Host
	Creator              string                   `bson:"creator,omitempty"`                 // 创建人
	Updater              string                   `bson:"updater,omitempty"`                 // 更新人
	CreatedAt            int64                    `bson:"created_at,omitempty"`              // 创建时间
	UpdatedAt            int64                    `bson:"updated_at,omitempty"`              // 更新时间
}
