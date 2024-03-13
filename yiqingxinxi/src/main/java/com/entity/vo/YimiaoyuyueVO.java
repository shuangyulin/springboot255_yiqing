package com.entity.vo;

import com.entity.YimiaoyuyueEntity;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.annotations.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;

/**
 * 疫苗预约
 * 手机端接口返回实体辅助类
 * （主要作用去除一些不必要的字段）
 */
@TableName("yimiaoyuyue")
public class YimiaoyuyueVO implements Serializable {
    private static final long serialVersionUID = 1L;


    /**
     * 主键
     */

    @TableField(value = "id")
    private Integer id;


    /**
     * 用户
     */

    @TableField(value = "yonghu_id")
    private Integer yonghuId;


    /**
     * 预约编号
     */

    @TableField(value = "yimiaoyuyue_uuid_number")
    private String yimiaoyuyueUuidNumber;


    /**
     * 第几针
     */

    @TableField(value = "zhen_types")
    private Integer zhenTypes;


    /**
     * 预约备注
     */

    @TableField(value = "yuyue_content")
    private String yuyueContent;


    /**
     * 疫苗预约状态
     */

    @TableField(value = "yimiaoyuyue_types")
    private Integer yimiaoyuyueTypes;


    /**
     * 预约打针时间
     */
    @JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat

    @TableField(value = "yuyue_time")
    private Date yuyueTime;


    /**
     * 实际打针时间
     */
    @JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat

    @TableField(value = "shiji_time")
    private Date shijiTime;


    /**
     * 疫苗编号
     */

    @TableField(value = "yimiao_bianhao")
    private String yimiaoBianhao;


    /**
     * 疫苗生产日期
     */
    @JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat

    @TableField(value = "yimiaoshengchan_time")
    private Date yimiaoshengchanTime;


    /**
     * 疫苗公司
     */

    @TableField(value = "yimiaogongsi_types")
    private Integer yimiaogongsiTypes;


    /**
     * 备注
     */

    @TableField(value = "beizhu_content")
    private String beizhuContent;


    /**
     * 申请时间
     */
    @JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat

    @TableField(value = "insert_time")
    private Date insertTime;


    /**
     * 创建时间
     */
    @JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat

    @TableField(value = "create_time")
    private Date createTime;


    /**
	 * 设置：主键
	 */
    public Integer getId() {
        return id;
    }


    /**
	 * 获取：主键
	 */

    public void setId(Integer id) {
        this.id = id;
    }
    /**
	 * 设置：用户
	 */
    public Integer getYonghuId() {
        return yonghuId;
    }


    /**
	 * 获取：用户
	 */

    public void setYonghuId(Integer yonghuId) {
        this.yonghuId = yonghuId;
    }
    /**
	 * 设置：预约编号
	 */
    public String getYimiaoyuyueUuidNumber() {
        return yimiaoyuyueUuidNumber;
    }


    /**
	 * 获取：预约编号
	 */

    public void setYimiaoyuyueUuidNumber(String yimiaoyuyueUuidNumber) {
        this.yimiaoyuyueUuidNumber = yimiaoyuyueUuidNumber;
    }
    /**
	 * 设置：第几针
	 */
    public Integer getZhenTypes() {
        return zhenTypes;
    }


    /**
	 * 获取：第几针
	 */

    public void setZhenTypes(Integer zhenTypes) {
        this.zhenTypes = zhenTypes;
    }
    /**
	 * 设置：预约备注
	 */
    public String getYuyueContent() {
        return yuyueContent;
    }


    /**
	 * 获取：预约备注
	 */

    public void setYuyueContent(String yuyueContent) {
        this.yuyueContent = yuyueContent;
    }
    /**
	 * 设置：疫苗预约状态
	 */
    public Integer getYimiaoyuyueTypes() {
        return yimiaoyuyueTypes;
    }


    /**
	 * 获取：疫苗预约状态
	 */

    public void setYimiaoyuyueTypes(Integer yimiaoyuyueTypes) {
        this.yimiaoyuyueTypes = yimiaoyuyueTypes;
    }
    /**
	 * 设置：预约打针时间
	 */
    public Date getYuyueTime() {
        return yuyueTime;
    }


    /**
	 * 获取：预约打针时间
	 */

    public void setYuyueTime(Date yuyueTime) {
        this.yuyueTime = yuyueTime;
    }
    /**
	 * 设置：实际打针时间
	 */
    public Date getShijiTime() {
        return shijiTime;
    }


    /**
	 * 获取：实际打针时间
	 */

    public void setShijiTime(Date shijiTime) {
        this.shijiTime = shijiTime;
    }
    /**
	 * 设置：疫苗编号
	 */
    public String getYimiaoBianhao() {
        return yimiaoBianhao;
    }


    /**
	 * 获取：疫苗编号
	 */

    public void setYimiaoBianhao(String yimiaoBianhao) {
        this.yimiaoBianhao = yimiaoBianhao;
    }
    /**
	 * 设置：疫苗生产日期
	 */
    public Date getYimiaoshengchanTime() {
        return yimiaoshengchanTime;
    }


    /**
	 * 获取：疫苗生产日期
	 */

    public void setYimiaoshengchanTime(Date yimiaoshengchanTime) {
        this.yimiaoshengchanTime = yimiaoshengchanTime;
    }
    /**
	 * 设置：疫苗公司
	 */
    public Integer getYimiaogongsiTypes() {
        return yimiaogongsiTypes;
    }


    /**
	 * 获取：疫苗公司
	 */

    public void setYimiaogongsiTypes(Integer yimiaogongsiTypes) {
        this.yimiaogongsiTypes = yimiaogongsiTypes;
    }
    /**
	 * 设置：备注
	 */
    public String getBeizhuContent() {
        return beizhuContent;
    }


    /**
	 * 获取：备注
	 */

    public void setBeizhuContent(String beizhuContent) {
        this.beizhuContent = beizhuContent;
    }
    /**
	 * 设置：申请时间
	 */
    public Date getInsertTime() {
        return insertTime;
    }


    /**
	 * 获取：申请时间
	 */

    public void setInsertTime(Date insertTime) {
        this.insertTime = insertTime;
    }
    /**
	 * 设置：创建时间
	 */
    public Date getCreateTime() {
        return createTime;
    }


    /**
	 * 获取：创建时间
	 */

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

}
