# FromRect(Rect, Vector) Method


Converts a <a href="T_Avalonia_Rect">Rect</a> to device pixels using the specified scaling factor.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static PixelRect FromRect(
	Rect rect,
	Vector scale
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function FromRect ( 
	rect As Rect,
	scale As Vector
) As PixelRect
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member FromRect : 
        rect : Rect * 
        scale : Vector -> PixelRect 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/PixelRect.cs#L390" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Rect">Rect</a></dt><dd>The rect.</dd><dt>  <a href="T_Avalonia_Vector">Vector</a></dt><dd>The scaling factor.</dd></dl>

#### Return Value
<a href="T_Avalonia_PixelRect">PixelRect</a>  
The device-independent point.

## See Also


#### Reference
<a href="T_Avalonia_PixelRect">PixelRect Structure</a>  
<a href="Overload_Avalonia_PixelRect_FromRect">FromRect Overload</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

