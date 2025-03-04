import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ScreenFromWindow Method




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Screen? ScreenFromWindow(
	IWindowBaseImpl window
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function ScreenFromWindow ( 
	window As IWindowBaseImpl
) As Screen
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ScreenFromWindow : 
        window : IWindowBaseImpl -> Screen 
override ScreenFromWindow : 
        window : IWindowBaseImpl -> Screen 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Platform/IScreenImpl.cs#L68" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Platform_IWindowBaseImpl">IWindowBaseImpl</a></dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Platform_Screen">Screen</a>

#### Implements
<a href="M_Avalonia_Platform_IScreenImpl_ScreenFromWindow">IScreenImpl.ScreenFromWindow(IWindowBaseImpl)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Platform_ScreensBase_2">ScreensBase(TKey, TScreen) Class</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
