import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# IActivatableApplicationLifetime Interface
:::warning[Obsolete]

Note: This API is now obsolete.

:::





## Definition
**Namespace:** <a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[ObsoleteAttribute("This interface has no effect. Instead use Application.Current.TryGetFeature<IActivatableLifetime>().", 
	true)]
public interface IActivatableApplicationLifetime : IActivatableLifetime
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ObsoleteAttribute("This interface has no effect. Instead use Application.Current.TryGetFeature<IActivatableLifetime>().", 
	true)>
Public Interface IActivatableApplicationLifetime
	Inherits IActivatableLifetime
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ObsoleteAttribute("This interface has no effect. Instead use Application.Current.TryGetFeature<IActivatableLifetime>().", 
	true)>]
type IActivatableApplicationLifetime = 
    interface
        interface IActivatableLifetime
    end
```
</TabItem>
</Tabs>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Controls_ApplicationLifetimes_IActivatableLifetime">IActivatableLifetime</a></td></tr>
</table>



## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_ApplicationLifetimes_IActivatableLifetime_TryEnterBackground">TryEnterBackground</a></td>
<td>Tells the application that it should attempt to enter its background state. For example on OSX this would be [NSApp hide]<br />(Inherited from <a href="T_Avalonia_Controls_ApplicationLifetimes_IActivatableLifetime">IActivatableLifetime</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ApplicationLifetimes_IActivatableLifetime_TryLeaveBackground">TryLeaveBackground</a></td>
<td>Tells the application that it should attempt to leave its background state. For example on OSX this would be [NSApp unhide]<br />(Inherited from <a href="T_Avalonia_Controls_ApplicationLifetimes_IActivatableLifetime">IActivatableLifetime</a>)</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Controls_ApplicationLifetimes_IActivatableLifetime_Activated">Activated</a></td>
<td>An event that is raised when the application is Activated for various reasons as described by the <a href="T_Avalonia_Controls_ApplicationLifetimes_ActivationKind">ActivationKind</a> enumeration.<br />(Inherited from <a href="T_Avalonia_Controls_ApplicationLifetimes_IActivatableLifetime">IActivatableLifetime</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_ApplicationLifetimes_IActivatableLifetime_Deactivated">Deactivated</a></td>
<td>An event that is raised when the application is Deactivated for various reasons as described by the <a href="T_Avalonia_Controls_ApplicationLifetimes_ActivationKind">ActivationKind</a> enumeration.<br />(Inherited from <a href="T_Avalonia_Controls_ApplicationLifetimes_IActivatableLifetime">IActivatableLifetime</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes Namespace</a>  
