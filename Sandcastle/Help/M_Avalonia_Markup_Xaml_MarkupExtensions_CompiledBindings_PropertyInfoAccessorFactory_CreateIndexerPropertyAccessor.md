---
title:CreateIndexerPropertyAccessor Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# CreateIndexerPropertyAccessor Method




## Definition
**Namespace:** <a href="N_Avalonia_Markup_Xaml_MarkupExtensions_CompiledBindings">Avalonia.Markup.Xaml.MarkupExtensions.CompiledBindings</a>  
**Assembly:** Avalonia.Markup.Xaml (in Avalonia.Markup.Xaml.dll) Version: 11.2.4

**C#**
``` C#
public static IPropertyAccessor CreateIndexerPropertyAccessor(
	WeakReference<Object?> target,
	IPropertyInfo property,
	int argument
)
```
**VB**
``` VB
Public Shared Function CreateIndexerPropertyAccessor ( 
	target As WeakReference(Of Object),
	property As IPropertyInfo,
	argument As Integer
) As IPropertyAccessor
```
**F#**
``` F#
static member CreateIndexerPropertyAccessor : 
        target : WeakReference<Object> * 
        property : IPropertyInfo * 
        argument : int -> IPropertyAccessor 
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.weakreference-1" target="_blank" rel="noopener noreferrer">WeakReference</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</dt><dd> </dd><dt>  <a href="T_Avalonia_Data_Core_IPropertyInfo">IPropertyInfo</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Data_Core_Plugins_IPropertyAccessor">IPropertyAccessor</a>

## See Also


#### Reference
<a href="T_Avalonia_Markup_Xaml_MarkupExtensions_CompiledBindings_PropertyInfoAccessorFactory">PropertyInfoAccessorFactory Class</a>  
<a href="N_Avalonia_Markup_Xaml_MarkupExtensions_CompiledBindings">Avalonia.Markup.Xaml.MarkupExtensions.CompiledBindings Namespace</a>  
