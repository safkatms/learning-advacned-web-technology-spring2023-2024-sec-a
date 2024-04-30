import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('/create')
  create(@Body(ValidationPipe) createProductDto: CreateProductDto) {
    return this.productService.createProduct(createProductDto);
  }

  @Get()
  findAll() {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.getProductById(+id);
  }

  @Patch(':id/update')
  update(@Param('id') id: string, @Body(ValidationPipe) updateProductDto: UpdateProductDto) {
    return this.productService.updateProduct(+id, updateProductDto);
  }

  @Delete(':id/delete')
  remove(@Param('id') id: string) {
    return this.productService.deleteProduct(+id);
  }
}
