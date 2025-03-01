import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ShutdownMode Property


Gets or sets the ShutdownMode. This property indicates whether the application is shutdown explicitly or implicitly. If ShutdownMode is set to OnExplicitShutdown the application is only closes if Shutdown is called. The default is OnLastWindowClose



## Definition
**Namespace:** <a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
ShutdownMode ShutdownMode { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Property ShutdownMode As ShutdownMode
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ShutdownMode : ShutdownMode with get, set
```
</TabItem>
</Tabs>



#### Property Value
<a href="T_Avalonia_Controls_ShutdownMode">ShutdownMode</a>  
The shutdown mode.

## See Also


#### Reference
<a href="T_Avalonia_Controls_ApplicationLifetimes_IClassicDesktopStyleApplicationLifetime">IClassicDesktopStyleApplicationLifetime Interface</a>  
<a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes Namespace</a>  
