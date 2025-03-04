import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ScreenFromTopLevel Method




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Screen? ScreenFromTopLevel(
	ITopLevelImpl topLevel
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function ScreenFromTopLevel ( 
	topLevel As ITopLevelImpl
) As Screen
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ScreenFromTopLevel : 
        topLevel : ITopLevelImpl -> Screen 
override ScreenFromTopLevel : 
        topLevel : ITopLevelImpl -> Screen 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Platform/IScreenImpl.cs#L70" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a></dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_Platform_Screen">Screen</a>

#### Implements
<a href="M_Avalonia_Platform_IScreenImpl_ScreenFromTopLevel">IScreenImpl.ScreenFromTopLevel(ITopLevelImpl)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Platform_ScreensBase_2">ScreensBase(TKey, TScreen) Class</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
