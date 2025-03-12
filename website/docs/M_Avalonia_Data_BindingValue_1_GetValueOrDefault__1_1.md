# GetValueOrDefault&lt;TResult&gt;(TResult) Method


Gets the value of the binding value if present, otherwise a default value.



## Definition
**Namespace:** <a href="N_Avalonia_Data">Avalonia.Data</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public TResult GetValueOrDefault<TResult>(
	TResult defaultValue
)

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function GetValueOrDefault(Of TResult) ( 
	defaultValue As TResult
) As TResult
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member GetValueOrDefault : 
        defaultValue : 'TResult -> 'TResult 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/BindingValue.cs#L228" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  TResult</dt><dd>The default value.</dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
TResult  
The value if present and of the correct type, `default(TResult)` if the value is present but not of the correct type or null, or *defaultValue* if the value is not present.

## See Also


#### Reference
<a href="T_Avalonia_Data_BindingValue_1">BindingValue(T) Structure</a>  
<a href="Overload_Avalonia_Data_BindingValue_1_GetValueOrDefault">GetValueOrDefault Overload</a>  
<a href="N_Avalonia_Data">Avalonia.Data Namespace</a>  

