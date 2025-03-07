# Division(Size, Size) Operator


Divides a size by another size to produce a scaling factor.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Vector operator /(
	Size left,
	Size right
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Operator / ( 
	left As Size,
	right As Size
) As Vector
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static let inline (/)
        left : Size * 
        right : Size  : Vector
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Size.cs#L121" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Size">Size</a></dt><dd>The first size</dd><dt>  <a href="T_Avalonia_Size">Size</a></dt><dd>The second size.</dd></dl>

#### Return Value
<a href="T_Avalonia_Vector">Vector</a>  
The scaled size.

## See Also


#### Reference
<a href="T_Avalonia_Size">Size Structure</a>  
<a href="Overload_Avalonia_Size_op_Division">Division Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
