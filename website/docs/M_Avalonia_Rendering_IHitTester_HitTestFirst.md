# HitTestFirst Method


Hit tests a location to find first visual at the specified point.



## Definition
**Namespace:** <a href="N_Avalonia_Rendering">Avalonia.Rendering</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
Visual? HitTestFirst(
	Point p,
	Visual root,
	Func<Visual, bool>? filter
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function HitTestFirst ( 
	p As Point,
	root As Visual,
	filter As Func(Of Visual, Boolean)
) As Visual
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract HitTestFirst : 
        p : Point * 
        root : Visual * 
        filter : Func<Visual, bool> -> Visual 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd>The point, in client coordinates.</dd><dt>  <a href="T_Avalonia_Visual">Visual</a></dt><dd>The root of the subtree to search.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(<a href="T_Avalonia_Visual">Visual</a>, <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>)</dt><dd>A filter predicate. If the predicate returns false then the visual and all its children will be excluded from the results.</dd></dl>

#### Return Value
<a href="T_Avalonia_Visual">Visual</a>  
The visual at the specified point, topmost first.

## See Also


#### Reference
<a href="T_Avalonia_Rendering_IHitTester">IHitTester Interface</a>  
<a href="N_Avalonia_Rendering">Avalonia.Rendering Namespace</a>  
