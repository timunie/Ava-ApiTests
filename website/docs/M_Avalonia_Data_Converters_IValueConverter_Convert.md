# Convert Method


Converts a value.



## Definition
**Namespace:** <a href="N_Avalonia_Data_Converters">Avalonia.Data.Converters</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
Object? Convert(
	Object? value,
	Type targetType,
	Object? parameter,
	CultureInfo culture
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function Convert ( 
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
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/Converters/IValueConverter.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The value to convert.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a></dt><dd>The type of the target.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>A user-defined parameter.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo" target="_blank" rel="noopener noreferrer">CultureInfo</a></dt><dd>The culture to use.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  
The converted value.

## Remarks
This method should not throw exceptions. If the value is not convertible, return a <a href="T_Avalonia_Data_BindingNotification">BindingNotification</a> in an error state. Any exceptions thrown will be treated as an application exception.

## See Also


#### Reference
<a href="T_Avalonia_Data_Converters_IValueConverter">IValueConverter Interface</a>  
<a href="N_Avalonia_Data_Converters">Avalonia.Data.Converters Namespace</a>  

