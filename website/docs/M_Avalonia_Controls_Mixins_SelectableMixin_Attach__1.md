import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Attach&lt;TControl&gt; Method


Initializes a new instance of the <a href="T_Avalonia_Controls_Mixins_SelectableMixin">SelectableMixin</a> class.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Mixins">Avalonia.Controls.Mixins</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static void Attach<TControl>(
	AvaloniaProperty<bool> isSelected
)
where TControl : Control

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Sub Attach(Of TControl As Control) ( 
	isSelected As AvaloniaProperty(Of Boolean)
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member Attach : 
        isSelected : AvaloniaProperty<bool> -> unit  when 'TControl : Control
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Mixins/SelectableMixin.cs#L42" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  AvaloniaProperty(<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>)</dt><dd>The IsSelected property.</dd></dl>

#### Type Parameters
<dl><dt /><dd>The control type.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Mixins_SelectableMixin">SelectableMixin Class</a>  
<a href="N_Avalonia_Controls_Mixins">Avalonia.Controls.Mixins Namespace</a>  
