# IActivatableLifetime Interface


An interface for ApplicationLifetimes where the application can be Activated and Deactivated.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IActivatableLifetime
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IActivatableLifetime
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IActivatableLifetime = interface end
```
</TabItem>
</Tabs>



## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_ApplicationLifetimes_IActivatableLifetime_TryEnterBackground">TryEnterBackground()</a></td>
<td>Tells the application that it should attempt to enter its background state. For example on OSX this would be [NSApp hide]</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ApplicationLifetimes_IActivatableLifetime_TryLeaveBackground">TryLeaveBackground()</a></td>
<td>Tells the application that it should attempt to leave its background state. For example on OSX this would be [NSApp unhide]</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Controls_ApplicationLifetimes_IActivatableLifetime_Activated">Activated</a></td>
<td>An event that is raised when the application is Activated for various reasons as described by the <a href="T_Avalonia_Controls_ApplicationLifetimes_ActivationKind">ActivationKind</a> enumeration.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_ApplicationLifetimes_IActivatableLifetime_Deactivated">Deactivated</a></td>
<td>An event that is raised when the application is Deactivated for various reasons as described by the <a href="T_Avalonia_Controls_ApplicationLifetimes_ActivationKind">ActivationKind</a> enumeration.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes Namespace</a>  
