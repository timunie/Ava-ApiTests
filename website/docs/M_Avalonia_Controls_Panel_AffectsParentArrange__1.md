import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# AffectsParentArrange&lt;TPanel&gt; Method


Marks a property on a child as affecting the parent panel's arrangement.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected static void AffectsParentArrange<TPanel>(
	params AvaloniaProperty[] properties
)
where TPanel : Panel

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Shared Sub AffectsParentArrange(Of TPanel As Panel) ( 
	ParamArray properties As AvaloniaProperty()
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member AffectsParentArrange : 
        properties : AvaloniaProperty[] -> unit  when 'TPanel : Panel
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Panel.cs#L105" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  AvaloniaProperty[]</dt><dd>The properties.</dd></dl>

#### Type Parameters
<dl><dt /><dd /></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Panel">Panel Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
