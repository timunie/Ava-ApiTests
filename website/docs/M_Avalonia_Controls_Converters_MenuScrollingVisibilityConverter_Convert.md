# Convert Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls_Converters">Avalonia.Controls.Converters</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

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



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Converters/MenuScrollingVisibilityConverter.cs#L16" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1" target="_blank" rel="noopener noreferrer">IList</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo" target="_blank" rel="noopener noreferrer">CultureInfo</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>

#### Implements
<a href="M_Avalonia_Data_Converters_IMultiValueConverter_Convert">IMultiValueConverter.Convert(IList(Object), Type, Object, CultureInfo)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Controls_Converters_MenuScrollingVisibilityConverter">MenuScrollingVisibilityConverter Class</a>  
<a href="N_Avalonia_Controls_Converters">Avalonia.Controls.Converters Namespace</a>  

