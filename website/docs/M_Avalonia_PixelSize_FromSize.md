# FromSize(Size, Vector) Method


Converts a <a href="T_Avalonia_Size">Size</a> to device pixels using the specified scaling factor.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static PixelSize FromSize(
	Size size,
	Vector scale
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function FromSize ( 
	size As Size,
	scale As Vector
) As PixelSize
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member FromSize : 
        size : Size * 
        scale : Vector -> PixelSize 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/PixelSize.cs#L213" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Size">Size</a></dt><dd>The size.</dd><dt>  <a href="T_Avalonia_Vector">Vector</a></dt><dd>The scaling factor.</dd></dl>

#### Return Value
<a href="T_Avalonia_PixelSize">PixelSize</a>  
The device-independent size.

## See Also


#### Reference
<a href="T_Avalonia_PixelSize">PixelSize Structure</a>  
<a href="Overload_Avalonia_PixelSize_FromSize">FromSize Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

