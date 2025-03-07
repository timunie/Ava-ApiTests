# GetValueOrDefault&lt;TResult&gt; Method


Gets the value if present, otherwise the default value.



## Definition
**Namespace:** <a href="N_Avalonia_Data">Avalonia.Data</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public TResult GetValueOrDefault<TResult>()

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function GetValueOrDefault(Of TResult) As TResult
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member GetValueOrDefault : unit -> 'TResult 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/BindingValue.cs#L211" title="View the source code">View Source</a>



#### Type Parameters
<dl><dt /><dd /></dl>

#### Return Value
TResult  
The value if present and of the correct type, `default(TResult)` if the value is not present or of an incorrect type.

## See Also


#### Reference
<a href="T_Avalonia_Data_BindingValue_1">BindingValue(T) Structure</a>  
<a href="Overload_Avalonia_Data_BindingValue_1_GetValueOrDefault">GetValueOrDefault Overload</a>  
<a href="N_Avalonia_Data">Avalonia.Data Namespace</a>  
