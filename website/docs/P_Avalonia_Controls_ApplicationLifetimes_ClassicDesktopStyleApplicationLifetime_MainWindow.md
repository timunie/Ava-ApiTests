import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# MainWindow Property


Gets or sets the main window of the application.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Window? MainWindow { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property MainWindow As Window
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract MainWindow : Window with get, set
override MainWindow : Window with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/ApplicationLifetimes/ClassicDesktopStyleApplicationLifetime.cs#L41" title="View the source code">View Source</a>



#### Property Value
<a href="T_Avalonia_Controls_Window">Window</a>  
The main window.

#### Implements
<a href="P_Avalonia_Controls_ApplicationLifetimes_IClassicDesktopStyleApplicationLifetime_MainWindow">IClassicDesktopStyleApplicationLifetime.MainWindow</a>  


## See Also


#### Reference
<a href="T_Avalonia_Controls_ApplicationLifetimes_ClassicDesktopStyleApplicationLifetime">ClassicDesktopStyleApplicationLifetime Class</a>  
<a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes Namespace</a>  
