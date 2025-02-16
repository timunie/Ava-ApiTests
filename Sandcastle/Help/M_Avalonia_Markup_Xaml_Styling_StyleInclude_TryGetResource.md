---
title:TryGetResource Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# TryGetResource Method




## Definition
**Namespace:** <a href="N_Avalonia_Markup_Xaml_Styling">Avalonia.Markup.Xaml.Styling</a>  
**Assembly:** Avalonia.Markup.Xaml (in Avalonia.Markup.Xaml.dll) Version: 11.2.4

**C#**
``` C#
public bool TryGetResource(
	Object key,
	ThemeVariant? theme,
	out Object?? value
)
```
**VB**
``` VB
Public Function TryGetResource ( 
	key As Object,
	theme As ThemeVariant,
	<OutAttribute> ByRef value As Object
) As Boolean
```
**F#**
``` F#
abstract TryGetResource : 
        key : Object * 
        theme : ThemeVariant * 
        value : Object byref -> bool 
override TryGetResource : 
        key : Object * 
        theme : ThemeVariant * 
        value : Object byref -> bool 
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Styling_ThemeVariant">ThemeVariant</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

#### Implements
<a href="M_Avalonia_Controls_IResourceNode_TryGetResource">IResourceNode.TryGetResource(Object, ThemeVariant, Object)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Markup_Xaml_Styling_StyleInclude">StyleInclude Class</a>  
<a href="N_Avalonia_Markup_Xaml_Styling">Avalonia.Markup.Xaml.Styling Namespace</a>  
