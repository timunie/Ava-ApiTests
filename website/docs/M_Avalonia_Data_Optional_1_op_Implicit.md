# Implicit Conversion (T to Optional&lt;T&gt;)


Creates an <a href="T_Avalonia_Data_Optional_1">Optional(T)</a> from an instance of the underlying value type.



## Definition
**Namespace:** <a href="N_Avalonia_Data">Avalonia.Data</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static implicit operator Optional<T> (
	T value
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Widening Operator CType ( 
	value As T
) As Optional(Of T)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
F# does not support the declaration of new casting operators.
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/Optional.cs#L114" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Data_Optional_1">T</a></dt><dd>The value.</dd></dl>

#### Return Value
<a href="T_Avalonia_Data_Optional_1">Optional</a>(<a href="T_Avalonia_Data_Optional_1">T</a>)

## See Also


#### Reference
<a href="T_Avalonia_Data_Optional_1">Optional(T) Structure</a>  
<a href="N_Avalonia_Data">Avalonia.Data Namespace</a>  

