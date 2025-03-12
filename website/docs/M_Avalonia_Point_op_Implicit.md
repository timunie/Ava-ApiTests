# Implicit Conversion (Point to Vector)


Converts the <a href="T_Avalonia_Point">Point</a> to a <a href="T_Avalonia_Vector">Vector</a>.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static implicit operator Vector (
	Point p
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Widening Operator CType ( 
	p As Point
) As Vector
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
F# does not support the declaration of new casting operators.
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Point.cs#L56" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd>The point.</dd></dl>

#### Return Value
<a href="T_Avalonia_Vector">Vector</a>

## See Also


#### Reference
<a href="T_Avalonia_Point">Point Structure</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

