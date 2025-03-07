# HitTest Method


Hit test the geometry in this node.



## Definition
**Namespace:** <a href="N_Avalonia_Rendering_SceneGraph">Avalonia.Rendering.SceneGraph</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
bool HitTest(
	Point p
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function HitTest ( 
	p As Point
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract HitTest : 
        p : Point -> bool 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd>The point in global coordinates.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
True if the point hits the node's geometry; otherwise false.This method does not recurse to childs, if you want to hit test children they must be hit tested manually.

## See Also


#### Reference
<a href="T_Avalonia_Rendering_SceneGraph_ICustomDrawOperation">ICustomDrawOperation Interface</a>  
<a href="N_Avalonia_Rendering_SceneGraph">Avalonia.Rendering.SceneGraph Namespace</a>  
