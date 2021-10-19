package com.ssafy.api.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("UserModifyPutRequest")
public class UserModifyPutReq {
	
	@ApiModelProperty(name="유저 Name", example="name")
	String name;
//	@ApiModelProperty(name="유저 Genre", example="genre")
//	String genre;
}
