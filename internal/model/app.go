package model

// 新建应用接口请求参数
type AppCreateReq struct {
	Name           string   `json:"name,omitempty"`             // 应用名称
	Type           int      `json:"type,omitempty"`             // 应用类型
	Models         []string `json:"models,omitempty"`           // 模型权限
	IsLimitQuota   bool     `json:"is_limit_quota,omitempty"`   // 是否限制额度
	Quota          int      `json:"quota,omitempty"`            // 额度
	QuotaExpiresAt string   `json:"quota_expires_at,omitempty"` // 额度过期时间
	IpWhitelist    string   `json:"ip_whitelist,omitempty"`     // IP白名单
	IpBlacklist    string   `json:"ip_blacklist,omitempty"`     // IP黑名单
	Remark         string   `json:"remark,omitempty"`           // 备注
	IsCreateKey    bool     `json:"is_create_key,omitempty"`    // 是否创建密钥
	Status         int      `json:"status,omitempty" d:"1"`     // 状态[1:正常, 2:禁用, -1:删除]
}

// 更新应用接口请求参数
type AppUpdateReq struct {
	Id             string   `json:"id,omitempty"`               // ID
	Name           string   `json:"name,omitempty"`             // 应用名称
	Type           int      `json:"type,omitempty"`             // 应用类型
	Models         []string `json:"models,omitempty" d:"[]"`    // 模型权限
	IsLimitQuota   bool     `json:"is_limit_quota,omitempty"`   // 是否限制额度
	Quota          int      `json:"quota,omitempty"`            // 额度
	QuotaExpiresAt string   `json:"quota_expires_at,omitempty"` // 额度过期时间
	IpWhitelist    string   `json:"ip_whitelist,omitempty"`     // IP白名单
	IpBlacklist    string   `json:"ip_blacklist,omitempty"`     // IP黑名单
	Remark         string   `json:"remark,omitempty"`           // 备注
	Status         int      `json:"status,omitempty" d:"1"`     // 状态[1:正常, 2:禁用, -1:删除]
}

// 更改应用状态接口请求参数
type AppChangeStatusReq struct {
	Id     string `json:"id,omitempty"`           // ID
	Status int    `json:"status,omitempty" d:"1"` // 状态[1:正常, 2:禁用, -1:删除]
}

// 应用详情接口响应参数
type AppDetailRes struct {
	*App
}

// 应用分页列表接口请求参数
type AppPageReq struct {
	Paging
	AppId          int      `json:"app_id,omitempty"`           // 应用ID
	Name           string   `json:"name,omitempty"`             // 应用名称
	Type           int      `json:"type,omitempty"`             // 应用类型
	Models         []string `json:"models,omitempty"`           // 模型权限
	Quota          int      `json:"quota,omitempty"`            // 额度
	QuotaExpiresAt string   `json:"quota_expires_at,omitempty"` // 额度过期时间
	IpWhitelist    []string `json:"ip_whitelist,omitempty"`     // IP白名单
	IpBlacklist    []string `json:"ip_blacklist,omitempty"`     // IP黑名单
	Remark         string   `json:"remark,omitempty"`           // 备注
	Status         int      `json:"status,omitempty"`           // 状态[1:正常, 2:禁用, -1:删除]
	CreatedAt      []string `json:"created_at,omitempty"`       // 创建时间
}

// 应用分页列表接口响应参数
type AppPageRes struct {
	Items  []*App  `json:"items"`
	Paging *Paging `json:"paging"`
}

// 应用列表接口请求参数
type AppListReq struct {
	AppId       int      `json:"app_id,omitempty"`       // 应用ID
	Name        string   `json:"name,omitempty"`         // 应用名称
	Type        int      `json:"type,omitempty"`         // 应用类型
	Models      []string `json:"models,omitempty"`       // 模型权限
	Quota       int      `json:"quota,omitempty"`        // 额度
	IpWhitelist []string `json:"ip_whitelist,omitempty"` // IP白名单
	IpBlacklist []string `json:"ip_blacklist,omitempty"` // IP黑名单
	Remark      string   `json:"remark,omitempty"`       // 备注
	Status      int      `json:"status,omitempty"`       // 状态[1:正常, 2:禁用, -1:删除]
}

// 应用列表接口响应参数
type AppListRes struct {
	Items []*App `json:"items"`
}

// 新建应用密钥接口请求参数
type AppCreateKeyReq struct {
	AppId int `json:"app_id,omitempty"` // 应用ID
}

// 新建应用密钥接口响应参数
type AppCreateKeyRes struct {
	AppId int    `json:"app_id,omitempty"` // 应用ID
	Key   string `json:"key,omitempty"`    // 密钥
}

// 应用密钥配置接口请求参数
type AppKeyConfigReq struct {
	Id             string   `json:"id,omitempty"`               // ID
	AppId          int      `json:"app_id,omitempty"`           // 应用ID
	Key            string   `json:"key,omitempty"`              // 密钥
	IsLimitQuota   bool     `json:"is_limit_quota,omitempty"`   // 是否限制额度
	Quota          int      `json:"quota,omitempty"`            // 额度
	QuotaExpiresAt string   `json:"quota_expires_at,omitempty"` // 额度过期时间
	Models         []string `json:"models,omitempty"`           // 模型权限
	IpWhitelist    string   `json:"ip_whitelist,omitempty"`     // IP白名单
	IpBlacklist    string   `json:"ip_blacklist,omitempty"`     // IP黑名单
	Remark         string   `json:"remark,omitempty"`           // 备注
	Status         int      `json:"status,omitempty" d:"1"`     // 状态[1:正常, 2:禁用, -1:删除]
}

// 应用模型权限接口请求参数
type AppModelsReq struct {
	AppId  int      `json:"app_id,omitempty"`        // 应用ID
	Models []string `json:"models,omitempty" d:"[]"` // 模型权限
}

type App struct {
	Id             string   `json:"id,omitempty"`               // ID
	AppId          int      `json:"app_id,omitempty"`           // 应用ID
	Name           string   `json:"name,omitempty"`             // 应用名称
	Type           int      `json:"type,omitempty"`             // 应用类型
	Models         []string `json:"models,omitempty"`           // 模型权限
	ModelNames     []string `json:"model_names,omitempty"`      // 模型名称
	IsLimitQuota   bool     `json:"is_limit_quota,omitempty"`   // 是否限制额度
	Quota          int      `json:"quota"`                      // 剩余额度
	UsedQuota      int      `json:"used_quota"`                 // 已用额度
	QuotaExpiresAt string   `json:"quota_expires_at,omitempty"` // 额度过期时间
	IpWhitelist    []string `json:"ip_whitelist,omitempty"`     // IP白名单
	IpBlacklist    []string `json:"ip_blacklist,omitempty"`     // IP黑名单
	Remark         string   `json:"remark,omitempty"`           // 备注
	Status         int      `json:"status,omitempty"`           // 状态[1:正常, 2:禁用, -1:删除]
	Creator        string   `json:"creator,omitempty"`          // 创建人
	Updater        string   `json:"updater,omitempty"`          // 更新人
	CreatedAt      string   `json:"created_at,omitempty"`       // 创建时间
	UpdatedAt      string   `json:"updated_at,omitempty"`       // 更新时间
}
