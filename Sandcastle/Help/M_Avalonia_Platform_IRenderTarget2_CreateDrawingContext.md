---
title:CreateDrawingContext(PixelSize, RenderTargetDrawingContextProperties) Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# CreateDrawingContext(PixelSize, RenderTargetDrawingContextProperties) Method




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
IDrawingContextImpl CreateDrawingContext(
	PixelSize expectedPixelSize,
	out RenderTargetDrawingContextProperties properties
)
```
**VB**
``` VB
Function CreateDrawingContext ( 
	expectedPixelSize As PixelSize,
	<OutAttribute> ByRef properties As RenderTargetDrawingContextProperties
) As IDrawingContextImpl
```
**F#**
``` F#
abstract CreateDrawingContext : 
        expectedPixelSize : PixelSize * 
        properties : RenderTargetDrawingContextProperties byref -> IDrawingContextImpl 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_PixelSize">PixelSize</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Platform_RenderTargetDrawingContextProperties">RenderTargetDrawingContextProperties</a></dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Platform_IDrawingContextImpl">IDrawingContextImpl</a>

## See Also


#### Reference
<a href="T_Avalonia_Platform_IRenderTarget2">IRenderTarget2 Interface</a>  
<a href="Overload_Avalonia_Platform_IRenderTarget2_CreateDrawingContext">CreateDrawingContext Overload</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
