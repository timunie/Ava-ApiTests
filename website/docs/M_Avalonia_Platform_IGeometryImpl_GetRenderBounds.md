# GetRenderBounds Method


Gets the geometry's bounding rectangle with the specified pen.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
Rect GetRenderBounds(
	IPen? pen
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function GetRenderBounds ( 
	pen As IPen
) As Rect
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract GetRenderBounds : 
        pen : IPen -> Rect 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IGeometryImpl.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_IPen">IPen</a></dt><dd>The pen to use. May be null.</dd></dl>

#### Return Value
<a href="T_Avalonia_Rect">Rect</a>  
The bounding rectangle.

## See Also


#### Reference
<a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
