package com.controller;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Map;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Date;
import java.util.List;
import javax.servlet.http.HttpServletRequest;

import com.utils.ValidatorUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.annotation.IgnoreAuth;

import com.entity.NewsEntity;
import com.entity.view.NewsView;

import com.service.NewsService;
import com.service.TokenService;
import com.utils.PageUtils;
import com.utils.R;
import com.utils.MPUtil;
import com.utils.MapUtils;
import com.utils.CommonUtil;
import java.io.IOException;

/**
 * 地摊公告
 * 后端接口
 * @author 
 * @email 
 * @date 2024-03-07 15:14:13
 */
@RestController
@RequestMapping("/news")
public class NewsController {
    @Autowired
    private NewsService newsService;




    



    /**
     * 后端列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params,NewsEntity news,
		HttpServletRequest request){
        EntityWrapper<NewsEntity> ew = new EntityWrapper<NewsEntity>();

		PageUtils page = newsService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, news), params), params));

        return R.ok().put("data", page);
    }
    
    /**
     * 前端列表
     */
	@IgnoreAuth
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params,NewsEntity news, 
		HttpServletRequest request){
        EntityWrapper<NewsEntity> ew = new EntityWrapper<NewsEntity>();

		PageUtils page = newsService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, news), params), params));
        return R.ok().put("data", page);
    }



	/**
     * 列表
     */
    @RequestMapping("/lists")
    public R list( NewsEntity news){
       	EntityWrapper<NewsEntity> ew = new EntityWrapper<NewsEntity>();
      	ew.allEq(MPUtil.allEQMapPre( news, "news")); 
        return R.ok().put("data", newsService.selectListView(ew));
    }

	 /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(NewsEntity news){
        EntityWrapper< NewsEntity> ew = new EntityWrapper< NewsEntity>();
 		ew.allEq(MPUtil.allEQMapPre( news, "news")); 
		NewsView newsView =  newsService.selectView(ew);
		return R.ok("查询地摊公告成功").put("data", newsView);
    }
	
    /**
     * 后端详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
        NewsEntity news = newsService.selectById(id);
        return R.ok().put("data", news);
    }

    /**
     * 前端详情
     */
	@IgnoreAuth
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id){
        NewsEntity news = newsService.selectById(id);
        return R.ok().put("data", news);
    }
    



    /**
     * 后端保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody NewsEntity news, HttpServletRequest request){
    	//ValidatorUtils.validateEntity(news);
        newsService.insert(news);
        return R.ok();
    }
    
    /**
     * 前端保存
     */
    @RequestMapping("/add")
    public R add(@RequestBody NewsEntity news, HttpServletRequest request){
    	//ValidatorUtils.validateEntity(news);
        newsService.insert(news);
        return R.ok();
    }



     /**
     * 获取用户密保
     */
    @RequestMapping("/security")
    @IgnoreAuth
    public R security(@RequestParam String username){
        NewsEntity news = newsService.selectOne(new EntityWrapper<NewsEntity>().eq("", username));
        return R.ok().put("data", news);
    }


    /**
     * 修改
     */
    @RequestMapping("/update")
    @Transactional
    @IgnoreAuth
    public R update(@RequestBody NewsEntity news, HttpServletRequest request){
        //ValidatorUtils.validateEntity(news);
        newsService.updateById(news);//全部更新
        return R.ok();
    }



    

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids){
        newsService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }
    
	
	/**
     * 前端智能排序
     */
	@IgnoreAuth
    @RequestMapping("/autoSort")
    public R autoSort(@RequestParam Map<String, Object> params,NewsEntity news, HttpServletRequest request,String pre){
        EntityWrapper<NewsEntity> ew = new EntityWrapper<NewsEntity>();
        Map<String, Object> newMap = new HashMap<String, Object>();
        Map<String, Object> param = new HashMap<String, Object>();
		Iterator<Map.Entry<String, Object>> it = param.entrySet().iterator();
		while (it.hasNext()) {
			Map.Entry<String, Object> entry = it.next();
			String key = entry.getKey();
			String newKey = entry.getKey();
			if (pre.endsWith(".")) {
				newMap.put(pre + newKey, entry.getValue());
			} else if (StringUtils.isEmpty(pre)) {
				newMap.put(newKey, entry.getValue());
			} else {
				newMap.put(pre + "." + newKey, entry.getValue());
			}
		}
		params.put("sort", "clicktime");
        params.put("order", "desc");
		PageUtils page = newsService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, news), params), params));
        return R.ok().put("data", page);
    }










}