# HitTest Method


Hit tests a location to find the visuals at the specified point.



## Definition
**Namespace:** <a href="N_Avalonia_Rendering">Avalonia.Rendering</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
IEnumerable<Visual> HitTest(
	Point p,
	Visual root,
	Func<Visual, bool>? filter
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function HitTest ( 
	p As Point,
	root As Visual,
	filter As Func(Of Visual, Boolean)
) As IEnumerable(Of Visual)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract HitTest : 
        p : Point * 
        root : Visual * 
        filter : Func<Visual, bool> -> IEnumerable<Visual> 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd>The point, in client coordinates.</dd><dt>  <a href="T_Avalonia_Visual">Visual</a></dt><dd>The root of the subtree to search.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(<a href="T_Avalonia_Visual">Visual</a>, <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>)</dt><dd>A filter predicate. If the predicate returns false then the visual and all its children will be excluded from the results.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(<a href="T_Avalonia_Visual">Visual</a>)  
The visuals at the specified point, topmost first.

## See Also


#### Reference
<a href="T_Avalonia_Rendering_IHitTester">IHitTester Interface</a>  
<a href="N_Avalonia_Rendering">Avalonia.Rendering Namespace</a>  
