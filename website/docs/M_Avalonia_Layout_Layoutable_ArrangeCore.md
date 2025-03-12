# ArrangeCore Method


The default implementation of the control's arrange pass.



## Definition
**Namespace:** <a href="N_Avalonia_Layout">Avalonia.Layout</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual void ArrangeCore(
	Rect finalRect
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Sub ArrangeCore ( 
	finalRect As Rect
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ArrangeCore : 
        finalRect : Rect -> unit 
override ArrangeCore : 
        finalRect : Rect -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Layout/Layoutable.cs#L632" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Rect">Rect</a></dt><dd>The control's new bounds.</dd></dl>This method calls <a href="M_Avalonia_Layout_Layoutable_ArrangeOverride">ArrangeOverride(Size)</a> which is probably the method you want to override in order to modify a control's arrangement.

## See Also


#### Reference
<a href="T_Avalonia_Layout_Layoutable">Layoutable Class</a>  
<a href="N_Avalonia_Layout">Avalonia.Layout Namespace</a>  

