import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# PopupRoot(TopLevel, IPopupImpl, IAvaloniaDependencyResolver) Constructor


Initializes a new instance of the <a href="T_Avalonia_Controls_Primitives_PopupRoot">PopupRoot</a> class.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public PopupRoot(
	TopLevel parent,
	IPopupImpl impl,
	IAvaloniaDependencyResolver? dependencyResolver
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	parent As TopLevel,
	impl As IPopupImpl,
	dependencyResolver As IAvaloniaDependencyResolver
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        parent : TopLevel * 
        impl : IPopupImpl * 
        dependencyResolver : IAvaloniaDependencyResolver -> PopupRoot
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Primitives/PopupRoot.cs#L60" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_TopLevel">TopLevel</a></dt><dd>The popup parent.</dd><dt>  <a href="T_Avalonia_Platform_IPopupImpl">IPopupImpl</a></dt><dd>The popup implementation.</dd><dt>  IAvaloniaDependencyResolver</dt><dd>The dependency resolver to use. If null the default dependency resolver will be used.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_PopupRoot">PopupRoot Class</a>  
<a href="Overload_Avalonia_Controls_Primitives_PopupRoot__ctor">PopupRoot Overload</a>  
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  
