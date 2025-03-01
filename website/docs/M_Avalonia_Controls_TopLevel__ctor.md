import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# TopLevel(ITopLevelImpl, IAvaloniaDependencyResolver) Constructor


Initializes a new instance of the <a href="T_Avalonia_Controls_TopLevel">TopLevel</a> class.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public TopLevel(
	ITopLevelImpl impl,
	IAvaloniaDependencyResolver? dependencyResolver
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	impl As ITopLevelImpl,
	dependencyResolver As IAvaloniaDependencyResolver
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        impl : ITopLevelImpl * 
        dependencyResolver : IAvaloniaDependencyResolver -> TopLevel
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a></dt><dd>The platform-specific window implementation.</dd><dt>  IAvaloniaDependencyResolver</dt><dd>The dependency resolver to use. If null the default dependency resolver will be used.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_TopLevel">TopLevel Class</a>  
<a href="Overload_Avalonia_Controls_TopLevel__ctor">TopLevel Overload</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
