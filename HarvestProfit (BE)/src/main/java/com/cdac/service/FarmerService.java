package com.cdac.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cdac.Entity.BiddingEntityClass;
import com.cdac.Entity.FarmersClass;
import com.cdac.Entity.FarmgoodsClass;
import com.cdac.Entity.UserdetailsClass;
import com.cdac.exceptions.ResourceNotFoundException;

import java.util.List;

import com.cdac.repository.BiddingRepo;
import com.cdac.repository.FarmersRepo;
import com.cdac.repository.FarmgoodsRepo;

@Service
@Transactional
public class FarmerService {

	@Autowired
	private FarmersRepo farmerrepo;
	
	@Autowired
	private FarmgoodsRepo farmgoodsrepo;
	
	@Autowired
	private BiddingRepo bidrepo;
	
	FarmersClass farmer = new FarmersClass();

	public void addfarmer(UserdetailsClass userdetailsclass) {
		
		farmer.setUserinfo(userdetailsclass);
		farmerrepo.save(farmer);
	}
	
	public FarmersClass getFarmer(String email) {
		System.out.println("12345");
		return farmerrepo.getFarmerByEmail(email);
	}

	public void addFarmGoods(FarmgoodsClass farmgoods) {
		farmgoodsrepo.save(farmgoods);
	}

	public List<FarmgoodsClass> getGoods(int id) {
		 List<FarmgoodsClass> list =farmgoodsrepo.GetGoodsByFId(id);
		 return list;
	}

	public void deldata(int goodsId) {
		farmgoodsrepo.deletegoods(goodsId);
		
	}

	public FarmgoodsClass getsinglegood(int id) {
		return farmgoodsrepo.getsingle(id);
	}

	public List<BiddingEntityClass> gethistory(int farmerId) {
		return bidrepo.getfarmerbidhistory(farmerId);
	}
	
	
}

