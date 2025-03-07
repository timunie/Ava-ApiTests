# Convert Method


Converts a value.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Converters">Avalonia.Controls.Converters</a>  
**Assembly:** Avalonia.Controls.ColorPicker (in Avalonia.Controls.ColorPicker.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Object? Convert(
	Object? value,
	Type targetType,
	Object? parameter,
	CultureInfo culture
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function Convert ( 
	value As Object,
	targetType As Type,
	parameter As Object,
	culture As CultureInfo
) As Object
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Convert : 
        value : Object * 
        targetType : Type * 
        parameter : Object * 
        culture : CultureInfo -> Object 
override Convert : 
        value : Object * 
        targetType : Type * 
        parameter : Object * 
        culture : CultureInfo -> Object 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.ColorPicker/Converters/DoNothingForNullConverter.cs#L20" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The value to convert.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a></dt><dd>The type of the target.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>A user-defined parameter.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo" target="_blank" rel="noopener noreferrer">CultureInfo</a></dt><dd>The culture to use.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  
The converted value.

#### Implements
<a href="M_Avalonia_Data_Converters_IValueConverter_Convert">IValueConverter.Convert(Object, Type, Object, CultureInfo)</a>  
This method should not throw exceptions. If the value is not convertible, return a <a href="T_Avalonia_Data_BindingNotification">BindingNotification</a> in an error state. Any exceptions thrown will be treated as an application exception.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Converters_DoNothingForNullConverter">DoNothingForNullConverter Class</a>  
<a href="N_Avalonia_Controls_Converters">Avalonia.Controls.Converters Namespace</a>  
