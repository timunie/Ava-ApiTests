import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Styles Property


Gets the application's global styles.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Styles Styles { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public ReadOnly Property Styles As Styles
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Styles : Styles with get
override Styles : Styles with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Application.cs#L159" title="View the source code">View Source</a>



#### Property Value
Styles  
The application's global styles.

#### Implements
IStyleHost.Styles  


## 
Global styles apply to all windows in the application.

## See Also


#### Reference
<a href="T_Avalonia_Application">Application Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
