# Implicit Conversion (Optional&lt;T&gt; to BindingValue&lt;T&gt;)


Creates a binding value from an <a href="T_Avalonia_Data_Optional_1">Optional(T)</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Data">Avalonia.Data</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static implicit operator BindingValue<T> (
	Optional<T> optional
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Widening Operator CType ( 
	optional As Optional(Of T)
) As BindingValue(Of T)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
F# does not support the declaration of new casting operators.
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/BindingValue.cs#L323" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Data_Optional_1">Optional</a>(<a href="T_Avalonia_Data_BindingValue_1">T</a>)</dt><dd>The optional value.</dd></dl>

#### Return Value
<a href="T_Avalonia_Data_BindingValue_1">BindingValue</a>(<a href="T_Avalonia_Data_BindingValue_1">T</a>)

## See Also


#### Reference
<a href="T_Avalonia_Data_BindingValue_1">BindingValue(T) Structure</a>  
<a href="Overload_Avalonia_Data_BindingValue_1_op_Implicit">Implicit Overload</a>  
<a href="N_Avalonia_Data">Avalonia.Data Namespace</a>  

