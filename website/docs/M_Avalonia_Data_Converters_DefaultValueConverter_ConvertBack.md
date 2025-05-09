# ConvertBack Method


Converts a value.



## Definition
**Namespace:** <a href="N_Avalonia_Data_Converters">Avalonia.Data.Converters</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Object? ConvertBack(
	Object? value,
	Type targetType,
	Object? parameter,
	CultureInfo culture
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function ConvertBack ( 
	value As Object,
	targetType As Type,
	parameter As Object,
	culture As CultureInfo
) As Object
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ConvertBack : 
        value : Object * 
        targetType : Type * 
        parameter : Object * 
        culture : CultureInfo -> Object 
override ConvertBack : 
        value : Object * 
        targetType : Type * 
        parameter : Object * 
        culture : CultureInfo -> Object 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/Converters/DefaultValueConverter.cs#L77" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The value to convert.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a></dt><dd>The type of the target.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>A user-defined parameter.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo" target="_blank" rel="noopener noreferrer">CultureInfo</a></dt><dd>The culture to use.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  
The converted value.

#### Implements
<a href="M_Avalonia_Data_Converters_IValueConverter_ConvertBack">IValueConverter.ConvertBack(Object, Type, Object, CultureInfo)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Data_Converters_DefaultValueConverter">DefaultValueConverter Class</a>  
<a href="N_Avalonia_Data_Converters">Avalonia.Data.Converters Namespace</a>  

