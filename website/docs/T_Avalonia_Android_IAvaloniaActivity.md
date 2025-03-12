# IAvaloniaActivity Interface




## Definition
**Namespace:** <a href="N_Avalonia_Android">Avalonia.Android</a>  
**Assembly:** Avalonia.Android (in Avalonia.Android.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IAvaloniaActivity : IActivityResultHandler, 
	IActivityNavigationService
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IAvaloniaActivity
	Inherits IActivityResultHandler, IActivityNavigationService
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IAvaloniaActivity = 
    interface
        interface IActivityResultHandler
        interface IActivityNavigationService
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Android/Avalonia.Android/IAvaloniaActivity.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Android_IActivityNavigationService">IActivityNavigationService</a>, <a href="T_Avalonia_Android_IActivityResultHandler">IActivityResultHandler</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Android_IAvaloniaActivity_Content">Content</a></td>
<td> </td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Android_IAvaloniaActivity_Activated">Activated</a></td>
<td> </td>
</tr>
<tr>
<td><a href="E_Avalonia_Android_IActivityNavigationService_BackRequested">BackRequested</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Android_IActivityNavigationService">IActivityNavigationService</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Android_IAvaloniaActivity_Deactivated">Deactivated</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Android">Avalonia.Android Namespace</a>  

