---
title:CreateInpcPropertyAccessor Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# CreateInpcPropertyAccessor Method




## Definition
**Namespace:** <a href="N_Avalonia_Markup_Xaml_MarkupExtensions_CompiledBindings">Avalonia.Markup.Xaml.MarkupExtensions.CompiledBindings</a>  
**Assembly:** Avalonia.Markup.Xaml (in Avalonia.Markup.Xaml.dll) Version: 11.2.4

**C#**
``` C#
public static IPropertyAccessor CreateInpcPropertyAccessor(
	WeakReference<Object?> target,
	IPropertyInfo property
)
```
**VB**
``` VB
Public Shared Function CreateInpcPropertyAccessor ( 
	target As WeakReference(Of Object),
	property As IPropertyInfo
) As IPropertyAccessor
```
**F#**
``` F#
static member CreateInpcPropertyAccessor : 
        target : WeakReference<Object> * 
        property : IPropertyInfo -> IPropertyAccessor 
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.weakreference-1" target="_blank" rel="noopener noreferrer">WeakReference</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</dt><dd> </dd><dt>  <a href="T_Avalonia_Data_Core_IPropertyInfo">IPropertyInfo</a></dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Data_Core_Plugins_IPropertyAccessor">IPropertyAccessor</a>

## See Also


#### Reference
<a href="T_Avalonia_Markup_Xaml_MarkupExtensions_CompiledBindings_PropertyInfoAccessorFactory">PropertyInfoAccessorFactory Class</a>  
<a href="N_Avalonia_Markup_Xaml_MarkupExtensions_CompiledBindings">Avalonia.Markup.Xaml.MarkupExtensions.CompiledBindings Namespace</a>  
