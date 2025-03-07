# Convert Method


Converts multi-binding inputs to a final value.



## Definition
**Namespace:** <a href="N_Avalonia_Data_Converters">Avalonia.Data.Converters</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Object? Convert(
	IList<Object?> values,
	Type targetType,
	Object? parameter,
	CultureInfo culture
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function Convert ( 
	values As IList(Of Object),
	targetType As Type,
	parameter As Object,
	culture As CultureInfo
) As Object
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
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
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/Converters/FuncMultiValueConverter.cs#L29" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1" target="_blank" rel="noopener noreferrer">IList</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</dt><dd>The values to convert.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a></dt><dd>The type of the target.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd>A user-defined parameter.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo" target="_blank" rel="noopener noreferrer">CultureInfo</a></dt><dd>The culture to use.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  
The converted value.

#### Implements
<a href="M_Avalonia_Data_Converters_IMultiValueConverter_Convert">IMultiValueConverter.Convert(IList(Object), Type, Object, CultureInfo)</a>  
This method should not throw exceptions. If the value is not convertible, return <a href="F_Avalonia_AvaloniaProperty_UnsetValue">UnsetValue</a>. Any exception thrown will be treated as an application exception.

## See Also


#### Reference
<a href="T_Avalonia_Data_Converters_FuncMultiValueConverter_2">FuncMultiValueConverter(TIn, TOut) Class</a>  
<a href="N_Avalonia_Data_Converters">Avalonia.Data.Converters Namespace</a>  
