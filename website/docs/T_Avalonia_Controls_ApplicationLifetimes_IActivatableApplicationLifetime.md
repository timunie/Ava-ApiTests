# IActivatableApplicationLifetime Interface
<span>
:::warning[Obsolete]

Note: This API is now obsolete.

:::

</span><span>
:::warning[Not client implementable]

Note: This interface is not client implementable. You need to enable PrivateApi if you want to implement this interface.
:::

</span>



## Definition
**Namespace:** <a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[NotClientImplementableAttribute]
[ObsoleteAttribute("This interface has no effect. Instead use Application.Current.TryGetFeature<IActivatableLifetime>().", 
	true)]
public interface IActivatableApplicationLifetime : IActivatableLifetime
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<NotClientImplementableAttribute>
<ObsoleteAttribute("This interface has no effect. Instead use Application.Current.TryGetFeature<IActivatableLifetime>().", 
	true)>
Public Interface IActivatableApplicationLifetime
	Inherits IActivatableLifetime
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<NotClientImplementableAttribute>]
[<ObsoleteAttribute("This interface has no effect. Instead use Application.Current.TryGetFeature<IActivatableLifetime>().", 
	true)>]
type IActivatableApplicationLifetime = 
    interface
        interface IActivatableLifetime
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/ApplicationLifetimes/IActivatableApplicationLifetime.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Controls_ApplicationLifetimes_IActivatableLifetime">IActivatableLifetime</a></td></tr>
</table>



## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_ApplicationLifetimes_IActivatableLifetime_TryEnterBackground">TryEnterBackground()</a></td>
<td>Tells the application that it should attempt to enter its background state. For example on OSX this would be [NSApp hide]<br />(Inherited from <a href="T_Avalonia_Controls_ApplicationLifetimes_IActivatableLifetime">IActivatableLifetime</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ApplicationLifetimes_IActivatableLifetime_TryLeaveBackground">TryLeaveBackground()</a></td>
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

