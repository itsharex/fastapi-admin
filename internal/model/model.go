package model

// 新建模型接口请求参数
type ModelCreateReq struct {
	Corp               string         `json:"corp,omitempty"`                   // 公司[OpenAI;Baidu;Xfyun;Aliyun;Midjourney]
	Name               string         `json:"name,omitempty"`                   // 模型名称
	Model              string         `json:"model,omitempty"`                  // 模型
	Type               int            `json:"type,omitempty"`                   // 模型类型[1:文生文, 2:文生图, 3:图生文, 4:图生图, 5:文生语音, 6:语音生文]
	BaseUrl            string         `json:"base_url,omitempty"`               // 模型地址
	Path               string         `json:"path,omitempty"`                   // 模型路径
	Prompt             string         `json:"prompt,omitempty"`                 // 预设提示词
	BillingMethod      int            `json:"billing_method,omitempty"`         // 计费方式[1:倍率, 2:固定额度]
	PromptRatio        float64        `json:"prompt_ratio,omitempty" d:"1"`     // 提示倍率(提问倍率)
	CompletionRatio    float64        `json:"completion_ratio,omitempty" d:"1"` // 补全倍率(回答倍率)
	FixedQuota         int            `json:"fixed_quota,omitempty"`            // 固定额度
	DataFormat         int            `json:"data_format,omitempty"`            // 数据格式[1:统一格式, 2:官方格式]
	IsPublic           bool           `json:"is_public,omitempty"`              // 是否公开
	IsEnableModelAgent bool           `json:"is_enable_model_agent,omitempty"`  // 是否启用模型代理
	ModelAgents        []string       `json:"model_agents,omitempty"`           // 模型代理
	IsForward          bool           `json:"is_forward,omitempty"`             // 是否启用模型转发
	ForwardConfig      *ForwardConfig `json:"forward_config,omitempty"`         // 模型转发配置
	Remark             string         `json:"remark,omitempty"`                 // 备注
	Status             int            `json:"status,omitempty" d:"1"`           // 状态[1:正常, 2:禁用, -1:删除]
}

// 更新模型接口请求参数
type ModelUpdateReq struct {
	Id                 string         `json:"id" v:"required"`                  // ID
	Corp               string         `json:"corp,omitempty"`                   // 公司[OpenAI;Baidu;Xfyun;Aliyun;Midjourney]
	Name               string         `json:"name,omitempty"`                   // 模型名称
	Model              string         `json:"model,omitempty"`                  // 模型
	Type               int            `json:"type,omitempty"`                   // 模型类型[1:文生文, 2:文生图, 3:图生文, 4:图生图, 5:文生语音, 6:语音生文]
	BaseUrl            string         `json:"base_url,omitempty"`               // 模型地址
	Path               string         `json:"path,omitempty"`                   // 模型路径
	Prompt             string         `json:"prompt,omitempty"`                 // 预设提示词
	BillingMethod      int            `json:"billing_method,omitempty"`         // 计费方式[1:倍率, 2:固定额度]
	PromptRatio        float64        `json:"prompt_ratio,omitempty" d:"1"`     // 提示倍率(提问倍率)
	CompletionRatio    float64        `json:"completion_ratio,omitempty" d:"1"` // 补全倍率(回答倍率)
	FixedQuota         int            `json:"fixed_quota,omitempty"`            // 固定额度
	DataFormat         int            `json:"data_format,omitempty"`            // 数据格式[1:统一格式, 2:官方格式]
	IsPublic           bool           `json:"is_public,omitempty"`              // 是否公开
	IsEnableModelAgent bool           `json:"is_enable_model_agent,omitempty"`  // 是否启用模型代理
	ModelAgents        []string       `json:"model_agents,omitempty" d:"[]"`    // 模型代理
	IsForward          bool           `json:"is_forward,omitempty"`             // 是否启用模型转发
	ForwardConfig      *ForwardConfig `json:"forward_config,omitempty"`         // 模型转发配置
	Remark             string         `json:"remark,omitempty"`                 // 备注
	Status             int            `json:"status,omitempty" d:"1"`           // 状态[1:正常, 2:禁用, -1:删除]
}

// 更改模型状态接口请求参数
type ModelChangeStatusReq struct {
	Id     string `json:"id" v:"required"`        // ID
	Status int    `json:"status,omitempty" d:"1"` // 状态[1:正常, 2:禁用, -1:删除]
}

// 模型详情接口响应参数
type ModelDetailRes struct {
	*Model
}

// 模型分页列表接口请求参数
type ModelPageReq struct {
	Paging
	Corp            string   `json:"corp,omitempty"`             // 公司[OpenAI;Baidu;Xfyun;Aliyun;Midjourney]
	Name            string   `json:"name,omitempty"`             // 模型名称
	Model           string   `json:"model,omitempty"`            // 模型
	Type            int      `json:"type,omitempty"`             // 模型类型[1:文生文, 2:文生图, 3:图生文, 4:图生图, 5:文生语音, 6:语音生文]
	PromptRatio     float64  `json:"prompt_ratio,omitempty"`     // 提示倍率(提问倍率)
	CompletionRatio float64  `json:"completion_ratio,omitempty"` // 补全倍率(回答倍率)
	DataFormat      int      `json:"data_format,omitempty"`      // 数据格式[1:统一格式, 2:官方格式]
	IsPublic        bool     `json:"is_public"`                  // 是否公开
	Remark          string   `json:"remark,omitempty"`           // 备注
	Status          int      `json:"status,omitempty"`           // 状态[1:正常, 2:禁用, -1:删除]
	CreatedAt       []string `json:"created_at,omitempty"`       // 创建时间
}

// 模型分页列表接口响应参数
type ModelPageRes struct {
	Items  []*Model `json:"items"`
	Paging *Paging  `json:"paging"`
}

// 模型列表接口请求参数
type ModelListReq struct {
	Corp            string  `json:"corp,omitempty"`             // 公司[OpenAI;Baidu;Xfyun;Aliyun;Midjourney]
	Name            string  `json:"name,omitempty"`             // 模型名称
	Model           string  `json:"model,omitempty"`            // 模型
	Type            int     `json:"type,omitempty"`             // 模型类型[1:文生文, 2:文生图, 3:图生文, 4:图生图, 5:文生语音, 6:语音生文]
	PromptRatio     float64 `json:"prompt_ratio,omitempty"`     // 提示倍率(提问倍率)
	CompletionRatio float64 `json:"completion_ratio,omitempty"` // 补全倍率(回答倍率)
	DataFormat      int     `json:"data_format,omitempty"`      // 数据格式[1:统一格式, 2:官方格式]
	IsPublic        bool    `json:"is_public"`                  // 是否公开
	Remark          string  `json:"remark,omitempty"`           // 备注
	Status          int     `json:"status,omitempty" d:"1"`     // 状态[1:正常, 2:禁用, -1:删除]
}

// 模型列表接口响应参数
type ModelListRes struct {
	Items []*Model `json:"items"`
}

type Model struct {
	Id                 string         `json:"id,omitempty"`                // ID
	Corp               string         `json:"corp,omitempty"`              // 公司[OpenAI;Baidu;Xfyun;Aliyun;Midjourney]
	Name               string         `json:"name,omitempty"`              // 模型名称
	Model              string         `json:"model,omitempty"`             // 模型
	Type               int            `json:"type,omitempty"`              // 模型类型[1:文生文, 2:文生图, 3:图生文, 4:图生图, 5:文生语音, 6:语音生文]
	BaseUrl            string         `json:"base_url,omitempty"`          // 模型地址
	Path               string         `json:"path,omitempty"`              // 模型路径
	Prompt             string         `json:"prompt,omitempty"`            // 预设提示词
	BillingMethod      int            `json:"billing_method,omitempty"`    // 计费方式[1:倍率, 2:固定额度]
	PromptRatio        float64        `json:"prompt_ratio,omitempty"`      // 提示倍率(提问倍率)
	PromptPrice        float64        `json:"prompt_price,omitempty"`      // 提示价格(提问价格)
	CompletionRatio    float64        `json:"completion_ratio,omitempty"`  // 补全倍率(回答倍率)
	CompletionPrice    float64        `json:"completion_price,omitempty"`  // 补全价格(回答价格)
	FixedQuota         int            `json:"fixed_quota"`                 // 固定额度
	DataFormat         int            `json:"data_format,omitempty"`       // 数据格式[1:统一格式, 2:官方格式]
	IsPublic           bool           `json:"is_public"`                   // 是否公开
	IsEnableModelAgent bool           `json:"is_enable_model_agent"`       // 是否启用模型代理
	ModelAgents        []string       `json:"model_agents,omitempty"`      // 模型代理
	ModelAgentNames    []string       `json:"model_agent_names,omitempty"` // 模型代理名称
	IsForward          bool           `json:"is_forward,omitempty"`        // 是否启用模型转发
	ForwardConfig      *ForwardConfig `json:"forward_config,omitempty"`    // 模型转发配置
	Remark             string         `json:"remark,omitempty"`            // 备注
	Status             int            `json:"status,omitempty"`            // 状态[1:正常, 2:禁用, -1:删除]
	Creator            string         `json:"creator,omitempty"`           // 创建人
	Updater            string         `json:"updater,omitempty"`           // 更新人
	CreatedAt          string         `json:"created_at,omitempty"`        // 创建时间
	UpdatedAt          string         `json:"updated_at,omitempty"`        // 更新时间
}

type ForwardConfig struct {
	ForwardRule      int      `json:"forward_rule,omitempty"`       // 转发规则[1:全部转发, 2:按关键字]
	TargetModel      string   `json:"target_model,omitempty"`       // 转发规则为1时的目标模型
	TargetModelName  string   `json:"target_model_name,omitempty"`  // 转发规则为1时的目标模型名称
	Keywords         []string `json:"keywords,omitempty"`           // 转发规则为2时的关键字
	TargetModels     []string `json:"target_models,omitempty"`      // 转发规则为2时的目标模型
	TargetModelNames []string `json:"target_model_names,omitempty"` // 转发规则为2时的目标模型名称
}
