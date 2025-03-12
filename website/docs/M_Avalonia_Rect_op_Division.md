# Division Operator


Divides a rectangle by a vector.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Rect operator /(
	Rect rect,
	Vector scale
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Operator / ( 
	rect As Rect,
	scale As Vector
) As Rect
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static let inline (/)
        rect : Rect * 
        scale : Vector  : Rect
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Rect.cs#L222" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Rect">Rect</a></dt><dd>The rectangle.</dd><dt>  <a href="T_Avalonia_Vector">Vector</a></dt><dd>The vector scale.</dd></dl>

#### Return Value
<a href="T_Avalonia_Rect">Rect</a>  
The scaled rectangle.

## See Also


#### Reference
<a href="T_Avalonia_Rect">Rect Structure</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

