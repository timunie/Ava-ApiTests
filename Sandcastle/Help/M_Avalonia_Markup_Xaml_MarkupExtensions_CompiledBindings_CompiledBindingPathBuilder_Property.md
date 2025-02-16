---
title:Property Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# Property Method




## Definition
**Namespace:** <a href="N_Avalonia_Markup_Xaml_MarkupExtensions_CompiledBindings">Avalonia.Markup.Xaml.MarkupExtensions.CompiledBindings</a>  
**Assembly:** Avalonia.Markup.Xaml (in Avalonia.Markup.Xaml.dll) Version: 11.2.4

**C#**
``` C#
public CompiledBindingPathBuilder Property(
	IPropertyInfo info,
	Func<WeakReference<Object?>, IPropertyInfo, IPropertyAccessor> accessorFactory
)
```
**VB**
``` VB
Public Function Property ( 
	info As IPropertyInfo,
	accessorFactory As Func(Of WeakReference(Of Object), IPropertyInfo, IPropertyAccessor)
) As CompiledBindingPathBuilder
```
**F#**
``` F#
member Property : 
        info : IPropertyInfo * 
        accessorFactory : Func<WeakReference<Object>, IPropertyInfo, IPropertyAccessor> -> CompiledBindingPathBuilder 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Data_Core_IPropertyInfo">IPropertyInfo</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-3" target="_blank" rel="noopener noreferrer">Func</a>(<a href="https://learn.microsoft.com/dotnet/api/system.weakreference-1" target="_blank" rel="noopener noreferrer">WeakReference</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>), <a href="T_Avalonia_Data_Core_IPropertyInfo">IPropertyInfo</a>, <a href="T_Avalonia_Data_Core_Plugins_IPropertyAccessor">IPropertyAccessor</a>)</dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Markup_Xaml_MarkupExtensions_CompiledBindings_CompiledBindingPathBuilder">CompiledBindingPathBuilder</a>

## See Also


#### Reference
<a href="T_Avalonia_Markup_Xaml_MarkupExtensions_CompiledBindings_CompiledBindingPathBuilder">CompiledBindingPathBuilder Class</a>  
<a href="N_Avalonia_Markup_Xaml_MarkupExtensions_CompiledBindings">Avalonia.Markup.Xaml.MarkupExtensions.CompiledBindings Namespace</a>  
