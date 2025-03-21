# FromSizeWithDpi(Size, Vector) Method


Converts a <a href="T_Avalonia_Size">Size</a> to device pixels using the specified dots per inch (DPI).



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static PixelSize FromSizeWithDpi(
	Size size,
	Vector dpi
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function FromSizeWithDpi ( 
	size As Size,
	dpi As Vector
) As PixelSize
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member FromSizeWithDpi : 
        size : Size * 
        dpi : Vector -> PixelSize 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/PixelSize.cs#L231" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Size">Size</a></dt><dd>The size.</dd><dt>  <a href="T_Avalonia_Vector">Vector</a></dt><dd>The dots per inch.</dd></dl>

#### Return Value
<a href="T_Avalonia_PixelSize">PixelSize</a>  
The device-independent size.

## See Also


#### Reference
<a href="T_Avalonia_PixelSize">PixelSize Structure</a>  
<a href="Overload_Avalonia_PixelSize_FromSizeWithDpi">FromSizeWithDpi Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

