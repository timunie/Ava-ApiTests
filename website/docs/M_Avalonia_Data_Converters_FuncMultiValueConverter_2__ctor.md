# FuncMultiValueConverter&lt;TIn, TOut&gt; Constructor


Initializes a new instance of the <a href="T_Avalonia_Data_Converters_FuncValueConverter_2">FuncValueConverter(TIn, TOut)</a> class.



## Definition
**Namespace:** <a href="N_Avalonia_Data_Converters">Avalonia.Data.Converters</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public FuncMultiValueConverter(
	Func<IEnumerable<TIn>, TOut> convert
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	convert As Func(Of IEnumerable(Of TIn), TOut)
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        convert : Func<IEnumerable<'TIn>, 'TOut> -> FuncMultiValueConverter
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/Converters/FuncMultiValueConverter.cs#L22" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(<a href="T_Avalonia_Data_Converters_FuncMultiValueConverter_2">TIn</a>), <a href="T_Avalonia_Data_Converters_FuncMultiValueConverter_2">TOut</a>)</dt><dd>The convert function.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Data_Converters_FuncMultiValueConverter_2">FuncMultiValueConverter(TIn, TOut) Class</a>  
<a href="N_Avalonia_Data_Converters">Avalonia.Data.Converters Namespace</a>  

