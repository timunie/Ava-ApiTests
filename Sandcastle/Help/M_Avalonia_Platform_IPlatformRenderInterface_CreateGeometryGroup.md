---
title:CreateGeometryGroup Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# CreateGeometryGroup Method




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
IGeometryImpl CreateGeometryGroup(
	FillRule fillRule,
	IReadOnlyList<IGeometryImpl> children
)
```
**VB**
``` VB
Function CreateGeometryGroup ( 
	fillRule As FillRule,
	children As IReadOnlyList(Of IGeometryImpl)
) As IGeometryImpl
```
**F#**
``` F#
abstract CreateGeometryGroup : 
        fillRule : FillRule * 
        children : IReadOnlyList<IGeometryImpl> -> IGeometryImpl 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_FillRule">FillRule</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl</a>)</dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl</a>

## See Also


#### Reference
<a href="T_Avalonia_Platform_IPlatformRenderInterface">IPlatformRenderInterface Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
