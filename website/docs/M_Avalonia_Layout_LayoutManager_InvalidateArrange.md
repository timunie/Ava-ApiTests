# InvalidateArrange Method


Notifies the layout manager that a control requires an arrange.



## Definition
**Namespace:** <a href="N_Avalonia_Layout">Avalonia.Layout</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public virtual void InvalidateArrange(
	Layoutable control
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Overridable Sub InvalidateArrange ( 
	control As Layoutable
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract InvalidateArrange : 
        control : Layoutable -> unit 
override InvalidateArrange : 
        control : Layoutable -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Layout/LayoutManager.cs#L76" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Layout_Layoutable">Layoutable</a></dt><dd>The control.</dd></dl>

#### Implements
<a href="M_Avalonia_Layout_ILayoutManager_InvalidateArrange">ILayoutManager.InvalidateArrange(Layoutable)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Layout_LayoutManager">LayoutManager Class</a>  
<a href="N_Avalonia_Layout">Avalonia.Layout Namespace</a>  
