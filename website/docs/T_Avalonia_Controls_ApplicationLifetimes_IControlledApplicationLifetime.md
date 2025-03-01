import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# IControlledApplicationLifetime Interface




## Definition
**Namespace:** <a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IControlledApplicationLifetime : IApplicationLifetime
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IControlledApplicationLifetime
	Inherits IApplicationLifetime
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IControlledApplicationLifetime = 
    interface
        interface IApplicationLifetime
    end
```
</TabItem>
</Tabs>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Controls_ApplicationLifetimes_IApplicationLifetime">IApplicationLifetime</a></td></tr>
</table>



## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_ApplicationLifetimes_IControlledApplicationLifetime_Shutdown">Shutdown</a></td>
<td>Shuts down the application and sets the exit code that is returned to the operating system when the application exits.</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Controls_ApplicationLifetimes_IControlledApplicationLifetime_Exit">Exit</a></td>
<td>Sent when the application is exiting.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_ApplicationLifetimes_IControlledApplicationLifetime_Startup">Startup</a></td>
<td>Sent when the application is starting up.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes Namespace</a>  
