# ConvertBack Method


Converts a value using a value converter's ConvertBack method, logging a warning if necessary.



## Definition
**Namespace:** <a href="N_Avalonia_Data_Core">Avalonia.Data.Core</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected Object? ConvertBack(
	IValueConverter converter,
	CultureInfo? converterCulture,
	Object? converterParameter,
	Object? value,
	Type targetType
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Function ConvertBack ( 
	converter As IValueConverter,
	converterCulture As CultureInfo,
	converterParameter As Object,
	value As Object,
	targetType As Type
) As Object
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member ConvertBack : 
        converter : IValueConverter * 
        converterCulture : CultureInfo * 
        converterParameter : Object * 
        value : Object * 
        targetType : Type -> Object 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/Core/UntypedBindingExpressionBase.cs#L343" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Data_Converters_IValueConverter">IValueConverter</a></dt><dd>The value converter.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo" target="_blank" rel="noopener noreferrer">CultureInfo</a></dt><dd>The culture to use for the conversion.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The converter parameter.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>The value to convert.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a></dt><dd>The target type to convert to.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  
The converted value, or <a href="F_Avalonia_AvaloniaProperty_UnsetValue">UnsetValue</a> if an error occurred; in which case the error will be logged.

## See Also


#### Reference
<a href="T_Avalonia_Data_Core_UntypedBindingExpressionBase">UntypedBindingExpressionBase Class</a>  
<a href="N_Avalonia_Data_Core">Avalonia.Data.Core Namespace</a>  
