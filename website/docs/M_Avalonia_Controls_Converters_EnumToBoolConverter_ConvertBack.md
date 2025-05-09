# ConvertBack Method


Converts a value.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Converters">Avalonia.Controls.Converters</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

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



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Converters/EnumToBoolConverter.cs#L47" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The value to convert.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a></dt><dd>The type of the target.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>A user-defined parameter.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo" target="_blank" rel="noopener noreferrer">CultureInfo</a></dt><dd>The culture to use.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  
The converted value.

#### Implements
<a href="M_Avalonia_Data_Converters_IValueConverter_ConvertBack">IValueConverter.ConvertBack(Object, Type, Object, CultureInfo)</a>  


## Remarks
This method should not throw exceptions. If the value is not convertible, return a <a href="T_Avalonia_Data_BindingNotification">BindingNotification</a> in an error state. Any exceptions thrown will be treated as an application exception.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Converters_EnumToBoolConverter">EnumToBoolConverter Class</a>  
<a href="N_Avalonia_Controls_Converters">Avalonia.Controls.Converters Namespace</a>  

