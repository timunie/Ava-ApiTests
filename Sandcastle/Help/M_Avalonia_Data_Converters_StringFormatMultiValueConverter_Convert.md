---
title:Convert Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# Convert Method




## Definition
**Namespace:** <a href="N_Avalonia_Data_Converters">Avalonia.Data.Converters</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public Object? Convert(
	IList<Object?> values,
	Type targetType,
	Object? parameter,
	CultureInfo culture
)
```
**VB**
``` VB
Public Function Convert ( 
	values As IList(Of Object),
	targetType As Type,
	parameter As Object,
	culture As CultureInfo
) As Object
```
**F#**
``` F#
abstract Convert : 
        values : IList<Object> * 
        targetType : Type * 
        parameter : Object * 
        culture : CultureInfo -> Object 
override Convert : 
        values : IList<Object> * 
        targetType : Type * 
        parameter : Object * 
        culture : CultureInfo -> Object 
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1" target="_blank" rel="noopener noreferrer">IList</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo" target="_blank" rel="noopener noreferrer">CultureInfo</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>

#### Implements
<a href="M_Avalonia_Data_Converters_IMultiValueConverter_Convert">IMultiValueConverter.Convert(IList(Object), Type, Object, CultureInfo)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Data_Converters_StringFormatMultiValueConverter">StringFormatMultiValueConverter Class</a>  
<a href="N_Avalonia_Data_Converters">Avalonia.Data.Converters Namespace</a>  
